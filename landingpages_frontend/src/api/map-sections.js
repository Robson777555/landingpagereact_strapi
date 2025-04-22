export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};
export const mapSectionTwoColumns = (section = {}) => {
  /*
    {
          "__component": "section.section-two-columns",
          
          "title": "January brings us Firefox 85",
          "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
          "metadata": {
            "background": true,
        
            "section_id": "home",
           
            
            
          },
          
          "image": {
            
            "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg",
            
        },
*/
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    // eslint-disable-next-line
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    // eslint-disable-next-line
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
