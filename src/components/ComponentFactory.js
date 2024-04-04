// ComponentFactory.js

// Import your React components for AEM core components

import TextComponent from './aem-components/TextComponent';
import ImageComponent from './aem-components/ImageComponent';
import ButtonComponent from './aem-components/ButtonComponent';
// ... other component imports

class ComponentFactory {
  static createComponent(componentType, themeSettings) {
    console.log(themeSettings);
    switch (componentType) {
      case 'text':
        return <TextComponent text={'Hello World!'} />;
      case 'image':
        return (
          <ImageComponent
            imageUrl={'...'}
            altText={'Image'}
            themeSettings={themeSettings}
          />
        );
      case 'button':
        return (
          <ButtonComponent themeSettings={themeSettings.component.button} />
        );
      // Add more cases for other AEM core components
      default:
        console.warn(`Unknown component type: ${componentType}`);
        return null;
    }
  }
}

export default ComponentFactory;
