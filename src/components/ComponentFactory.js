// ComponentFactory.js

// Import your React components for AEM core components

import TextComponent from './aem-components/TextComponent';
import ImageComponent from './aem-components/ImageComponent';
import ButtonComponent from './aem-components/ButtonComponent';
// ... other component imports

class ComponentFactory {
  static createComponent(componentType, properties) {
    switch (componentType) {
      case 'text':
        return <TextComponent text={'Hello World!'} {...properties} />;
      case 'image':
        return (
          <ImageComponent imageUrl={'...'} altText={'Image'} {...properties} />
        );
      case 'button':
        return <ButtonComponent {...properties} />;
      // Add more cases for other AEM core components
      default:
        console.warn(`Unknown component type: ${componentType}`);
        return null;
    }
  }
}

export default ComponentFactory;
