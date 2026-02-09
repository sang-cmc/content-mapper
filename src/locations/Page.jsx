import React, { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Select,
  Button,
  Stack,
  Card,
  Text,
  Checkbox,
  FormControl,
  Paragraph,
  Note,
} from '@contentful/f36-components';

const Page = ({ sdk }) => {
  const [contentTypes, setContentTypes] = useState([]);
  const [selectedContentType, setSelectedContentType] = useState('');
  const [sourceEntries, setSourceEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState('');
  const [entryFields, setEntryFields] = useState([]);
  const [selectedFields, setSelectedFields] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch all content types
    const fetchContentTypes = async () => {
      try {
        const types = await sdk.cma.contentType.getMany({
          spaceId: sdk.ids.space,
          environmentId: sdk.ids.environment,
        });
        setContentTypes(types.items || []);
      } catch (err) {
        setError('Failed to fetch content types: ' + err.message);
      }
    };

    fetchContentTypes();
  }, [sdk]);

  const handleContentTypeChange = async (e) => {
    const contentTypeId = e.target.value;
    setSelectedContentType(contentTypeId);
    setSelectedEntry('');
    setEntryFields([]);
    setSelectedFields({});
    setError('');
    setSuccess('');

    if (!contentTypeId) {
      setSourceEntries([]);
      return;
    }

    // Fetch entries for selected content type
    try {
      setLoading(true);
      const entries = await sdk.cma.entry.getMany({
        spaceId: sdk.ids.space,
        environmentId: sdk.ids.environment,
        query: {
          content_type: contentTypeId,
          limit: 100,
        },
      });
      setSourceEntries(entries.items || []);
    } catch (err) {
      setError('Failed to fetch entries: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEntryChange = async (e) => {
    const entryId = e.target.value;
    setSelectedEntry(entryId);
    setError('');
    setSuccess('');

    if (!entryId) {
      setEntryFields([]);
      setSelectedFields({});
      return;
    }

    // Get the selected entry to extract its fields
    const entry = sourceEntries.find((e) => e.sys.id === entryId);
    if (entry) {
      const fields = Object.keys(entry.fields || {}).map((fieldId) => {
        const fieldValue = entry.fields[fieldId];
        const locale = Object.keys(fieldValue)[0];
        return {
          id: fieldId,
          value: fieldValue[locale],
          type: typeof fieldValue[locale],
        };
      });
      setEntryFields(fields);

      // Initialize all fields as selected by default
      const initialSelection = {};
      fields.forEach((field) => {
        initialSelection[field.id] = true;
      });
      setSelectedFields(initialSelection);
    }
  };

  const handleFieldToggle = (fieldId) => {
    setSelectedFields((prev) => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
  };

  const handleMapFields = () => {
    const selectedFieldList = entryFields
      .filter((field) => selectedFields[field.id])
      .map((field) => field.id);

    if (selectedFieldList.length === 0) {
      setError('Please select at least one field to map');
      return;
    }

    setSuccess(
      `Successfully prepared ${selectedFieldList.length} field(s) for mapping: ${selectedFieldList.join(', ')}`
    );

    // In a real implementation, this would trigger the actual mapping logic
    // For now, we're just showing which fields would be mapped
  };

  const getFieldPreview = (value) => {
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'object') return JSON.stringify(value).substring(0, 50) + '...';
    return String(value).substring(0, 50);
  };

  return (
    <Flex
      flexDirection="column"
      padding="spacingXl"
      style={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      <Heading marginBottom="spacingL">Content Mapper</Heading>
      <Paragraph marginBottom="spacingL">
        Select a content type and entry to map fields to your current content model.
      </Paragraph>

      {error && (
        <Note variant="negative" marginBottom="spacingM">
          {error}
        </Note>
      )}

      {success && (
        <Note variant="positive" marginBottom="spacingM">
          {success}
        </Note>
      )}

      <Stack flexDirection="column" spacing="spacingM">
        <FormControl>
          <FormControl.Label>Select Content Type</FormControl.Label>
          <Select
            value={selectedContentType}
            onChange={handleContentTypeChange}
            isDisabled={loading}
          >
            <Select.Option value="">-- Select a content type --</Select.Option>
            {contentTypes.map((ct) => (
              <Select.Option key={ct.sys.id} value={ct.sys.id}>
                {ct.name}
              </Select.Option>
            ))}
          </Select>
        </FormControl>

        {sourceEntries.length > 0 && (
          <FormControl>
            <FormControl.Label>Select Entry</FormControl.Label>
            <Select
              value={selectedEntry}
              onChange={handleEntryChange}
              isDisabled={loading}
            >
              <Select.Option value="">-- Select an entry --</Select.Option>
              {sourceEntries.map((entry) => {
                // Try to find a displayable field
                const displayField = entry.fields.title || entry.fields.name || entry.fields;
                const displayValue = displayField
                  ? Object.values(displayField)[0]
                  : entry.sys.id;
                return (
                  <Select.Option key={entry.sys.id} value={entry.sys.id}>
                    {displayValue} ({entry.sys.id})
                  </Select.Option>
                );
              })}
            </Select>
          </FormControl>
        )}

        {entryFields.length > 0 && (
          <Card padding="spacingL">
            <Heading as="h3" marginBottom="spacingM">
              Select Fields to Map
            </Heading>
            <Stack flexDirection="column" spacing="spacingS">
              {entryFields.map((field) => (
                <Flex
                  key={field.id}
                  alignItems="flex-start"
                  gap="spacingS"
                  style={{
                    padding: '8px',
                    borderBottom: '1px solid #e5e8eb',
                  }}
                >
                  <Checkbox
                    isChecked={selectedFields[field.id] || false}
                    onChange={() => handleFieldToggle(field.id)}
                    id={field.id}
                  />
                  <Flex flexDirection="column" style={{ flex: 1 }}>
                    <Text fontWeight="fontWeightDemiBold">{field.id}</Text>
                    <Text fontSize="fontSizeS" fontColor="gray500">
                      Type: {field.type} | Preview: {getFieldPreview(field.value)}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Stack>
            <Button
              variant="primary"
              onClick={handleMapFields}
              style={{ marginTop: '16px' }}
              isDisabled={Object.values(selectedFields).filter(Boolean).length === 0}
            >
              Map Selected Fields
            </Button>
          </Card>
        )}
      </Stack>
    </Flex>
  );
};

export default Page;
