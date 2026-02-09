import React, { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Text,
  Form,
  FormControl,
  Paragraph,
} from '@contentful/f36-components';

const ConfigScreen = ({ sdk }) => {
  const [parameters, setParameters] = useState({});

  useEffect(() => {
    // Load existing configuration
    const currentParameters = sdk.parameters.installation || {};
    setParameters(currentParameters);

    // Configure the app to be installable
    sdk.app.setReady();

    // Save configuration when requested
    sdk.app.onConfigure(() => {
      return {
        parameters: parameters,
        targetState: {
          EditorInterface: {},
        },
      };
    });
  }, [sdk, parameters]);

  return (
    <Flex
      flexDirection="column"
      marginTop="spacingXl"
      marginBottom="spacingXl"
      style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}
    >
      <Heading>Content Mapper Configuration</Heading>
      <Paragraph marginTop="spacingM">
        This app allows you to map content from one content type to another.
      </Paragraph>
      <Form>
        <FormControl>
          <Text>
            The Content Mapper app will be available in the "Apps" section.
            Once configured, you can use it to:
          </Text>
          <ul style={{ marginTop: '10px' }}>
            <li>Select a source content type from a dropdown</li>
            <li>Choose specific fields to map from the source content type</li>
            <li>Map those fields to your target content model</li>
          </ul>
        </FormControl>
      </Form>
    </Flex>
  );
};

export default ConfigScreen;
