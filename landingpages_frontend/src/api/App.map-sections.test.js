import { describe, it, expect } from '@jest/globals';
import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },

      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.component).toBe('');
  });

  it('should map section two columns details', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056172',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617f',
        section_id: 'home',
        name: 'Home',
        __v: 0,
        id: '602fdf2d540c00269e05617f',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056172',
    });
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
    expect(data.title).toBe('title');
    expect(data.text).toBe('abc');
    expect(data.srcImg).toBe('a.svg');
    expect(data.component).toBe('section.section-two-columns');
  });

  it('should map section content', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.component).toBe('');
    expect(data.html).toBe('');

    /*
      {
          "__component": "section.section-content",
          "_id": "602fdf2d540c00269e056173",
          "title": "news coverage and some surprises",
          "content": "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>",
          "metadata": {
            "background": false,
            "_id": "602fdf2d540c00269e05617a",
            "name": "intro",
            "section_id": "intro",
            "__v": 0,
            "id": "602fdf2d540c00269e05617a"
          },
          "__v": 1,
          "id": "602fdf2d540c00269e056173"
        }
    */
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      _id: '602fdf2d540c00269e056173',
      title: 'abc',
      content: 'abc',
      metadata: {
        background: false,
        _id: '602fdf2d540c00269e05617a',
        name: 'intro',
        section_id: 'intro',
        __v: 0,
        id: '602fdf2d540c00269e05617a',
      },
      __v: 1,
      id: '602fdf2d540c00269e056173',
    });
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('abc');
    expect(data.component).toBe('section.section-content');
    expect(data.html).toBe('abc');
  });

  it('should map grid text', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056174',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e05617c',
          title: 'Teste 1',
          description: 'Coisa',
          __v: 0,
          id: '602fdf2d540c00269e05617c',
        },
        {
          _id: '602fdf2d540c00269e05617d',
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e05617d',
        },
        {
          _id: '602fdf2d540c00269e05617e',
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e05617e',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: '602fdf2e540c00269e056199',
        name: 'grid-one',
        section_id: 'grid-one',
        __v: 0,
        id: '602fdf2e540c00269e056199',
      },
      __v: 2,
      id: '602fdf2d540c00269e056174',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should map grid text empty', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          _id: '602fdf2d540c00269e056183',
          __v: 0,
          image: {
            _id: '602fde37540c00269e05616b',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'abc',
            caption: '',
            hash: '360x360_r_1_6a2049d13a',
            ext: '',
            mime: 'image/jpeg',
            size: 29.09,
            width: 360,
            height: 360,
            url: 'a.svg',
            provider_metadata: {
              public_id: '360x360_r_1_6a2049d13a',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_6a2049d13a',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.48,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_6a2049d13a.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_1_6a2049d13a',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056183'],
            createdAt: '2021-02-19T15:50:15.686Z',
            updatedAt: '2021-02-19T15:54:21.862Z',
            __v: 0,
            id: '602fde37540c00269e05616b',
          },
          id: '602fdf2d540c00269e056183',
        },
        {
          _id: '602fdf2d540c00269e056184',
          __v: 0,
          image: {
            _id: '602fde37540c00269e05616c',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Um livro grande aberto',
            caption: '',
            hash: '360x360_r_1_c073b11d09',
            ext: '',
            mime: 'image/jpeg',
            size: 29.39,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
            provider_metadata: {
              public_id: '360x360_r_1_c073b11d09',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_c073b11d09',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 5.52,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_c073b11d09.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_1_c073b11d09',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056184'],
            createdAt: '2021-02-19T15:50:15.760Z',
            updatedAt: '2021-02-19T15:54:21.980Z',
            __v: 0,
            id: '602fde37540c00269e05616c',
          },
          id: '602fdf2d540c00269e056184',
        },
        {
          _id: '602fdf2d540c00269e056185',
          __v: 0,
          image: {
            _id: '602fde37540c00269e05616d',
            name: 'http://source.unsplash.com/random/360x360?r=2',
            alternativeText: 'Imagem do topo de uma cidade grande',
            caption: 'Imagem do topo de uma cidade grande',
            hash: '360x360_r_2_38651a645b',
            ext: '',
            mime: 'image/jpeg',
            size: 35.98,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
            provider_metadata: {
              public_id: '360x360_r_2_38651a645b',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=2',
                hash: 'thumbnail_360x360_r_2_38651a645b',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 7.97,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_2_38651a645b.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_2_38651a645b',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056185'],
            createdAt: '2021-02-19T15:50:15.821Z',
            updatedAt: '2021-02-19T15:54:21.968Z',
            __v: 0,
            id: '602fde37540c00269e05616d',
          },
          id: '602fdf2d540c00269e056185',
        },
        {
          _id: '602fdf2d540c00269e056186',
          __v: 0,
          image: {
            _id: '602fde37540c00269e05616e',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Filme para câmeras antigas',
            caption: '',
            hash: '360x360_r_1_9d32ada1f9',
            ext: '',
            mime: 'image/jpeg',
            size: 12.56,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg',
            provider_metadata: {
              public_id: '360x360_r_1_9d32ada1f9',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_9d32ada1f9',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 3.5,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_9d32ada1f9.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_1_9d32ada1f9',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056186'],
            createdAt: '2021-02-19T15:50:15.861Z',
            updatedAt: '2021-02-19T15:54:21.887Z',
            __v: 0,
            id: '602fde37540c00269e05616e',
          },
          id: '602fdf2d540c00269e056186',
        },
        {
          _id: '602fdf2d540c00269e056187',
          __v: 0,
          image: {
            _id: '602fde37540c00269e056170',
            name: 'http://source.unsplash.com/random/360x360?r=a1',
            alternativeText: 'Tela de notebook com Webull',
            caption: 'Tela de notebook com Webull',
            hash: '360x360_r_a1_973b2a68c9',
            ext: '',
            mime: 'image/jpeg',
            size: 12.64,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg',
            provider_metadata: {
              public_id: '360x360_r_a1_973b2a68c9',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=a1',
                hash: 'thumbnail_360x360_r_a1_973b2a68c9',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 3.9,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_a1_973b2a68c9.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_a1_973b2a68c9',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056187'],
            createdAt: '2021-02-19T15:50:15.979Z',
            updatedAt: '2021-02-19T15:54:21.992Z',
            __v: 0,
            id: '602fde37540c00269e056170',
          },
          id: '602fdf2d540c00269e056187',
        },
        {
          _id: '602fdf2d540c00269e056188',
          __v: 0,
          image: {
            _id: '602fde37540c00269e05616f',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Filme Kodak para câmeras antigas',
            caption: '',
            hash: '360x360_r_1_b3fcbf1d93',
            ext: '',
            mime: 'image/jpeg',
            size: 12.24,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg',
            provider_metadata: {
              public_id: '360x360_r_1_b3fcbf1d93',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_b3fcbf1d93',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 3.77,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_b3fcbf1d93.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_1_b3fcbf1d93',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056188'],
            createdAt: '2021-02-19T15:50:15.975Z',
            updatedAt: '2021-02-19T15:54:21.989Z',
            __v: 0,
            id: '602fde37540c00269e05616f',
          },
          id: '602fdf2d540c00269e056188',
        },
      ],
      metadata: {
        background: false,
        _id: '602fdf2e540c00269e0561a4',
        name: 'gallery',
        section_id: 'gallery',
        __v: 0,
        id: '602fdf2e540c00269e0561a4',
      },
      __v: 2,
      id: '602fdf2d540c00269e056175',
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });
});
