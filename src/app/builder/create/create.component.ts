import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServicesService } from './../../services.service';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
let editor;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterViewInit {
  private _editor: any;
  add_layers_block = true;
  layerShow = false;
  styleShow = true;
  constructor( public sidebarPanel: ServicesService ) { }

  get editor() {
    return this._editor;
  }

  ngOnInit() {
    this.sidebarPanel.hide();
    editor = this.initializeEditor();
    const bm = editor.BlockManager;
    
    editor.on('load', () => {
      editor.BlockManager.render([
        bm.get('wrapper').set('category', ''),
        bm.get('column1').set('category', ''),
        bm.get('column2').set('category', ''),
        bm.get('column3').set('category', ''),
        bm.get('text').set('category', ''),
        bm.get('image').set('category', '')
      ])
    });
    // bm.add('orderSnippet', {
    //   label: 'Orders',
    //   category: 'Snippets',
    //   content: { type: 'orderSnippet' },
    // })
    
    // const defaultType = bm.getType('default')
    // bm.addType('orderSnippet', {
    //   model: defaultType.model.extend({
    //     toHTML() {
    //       return '<div>{var-to-replace}</div>'
    //     },
    //   }),
    //   view: defaultType.view.extend({
    //     render(...args) {
    //       defaultType.view.prototype.render.apply(this, args)
    //       this.el.innerHTML = '<h2>A custom component content</h2>' // <- Doesn't affect the final HTML code
    //       return this
    //     },
    //   }),
    // })
    // editor.runCommand('sw-visibility');
    bm.add('custom-block-1', {
      id: 'cb1',
      label: 'Custom one',
      category: 'Snippets',
      content: {
        tagName: 'div',
        draggable: true,
        attributes: { 'custom-block-1-attribute': 'hola!' },
        components: [
          {
            tagName: 'div',
            className: 'testclass',
            content: '<h2 class="test">'+ bm.get('text') +'</h2>',
          }
        ]
      }
    })
    bm.add('custom-block-2', {
      id: 'cb1',
      label: 'Custom two',
      content: {
        tagName: 'div',
        draggable: true,
        attributes: { 'some-attribute': 'some-value' },
        components: [
          {
            tagName: 'div',
            components: '<b>Some static content</b>',
          }, {
            tagName: 'div',
            // use `content` for static strings, `components` string will be parsed
            // and transformed in Components
            components: '<span>HTML at some point</span>',
          }
        ]
      }
    })
    bm.add('custom-block-3', {
      id: 'cb13',
      label: 'input',
      content: {
        tagName: 'input',
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        droppable: true, // Can't drop other elements inside
        attributes: { // Default attributes
          type: 'text',
          name: 'default-name',
          placeholder: 'Insert text here',
        },
        components: [
          'name',
          'placeholder',
          { type: 'checkbox', name: 'required' },
          
        ]
      }
    })
    
    // editor.addComponents(`<input name="my-test" title="hello"/>`)
  }

  ngAfterViewInit() {
    const that = this;
    setTimeout(()=>{
      editor.Commands.add('show-layers', {
        run(editor, sender) {
          that.layerShow = false;
          that.styleShow = true;
        },
        stop(editor, sender) {
          that.styleShow = false;
          that.layerShow = true;
        },
      });
    },2000);
  }
  private initializeEditor(): any {
    return grapesjs.init({
      container: '#gjs',
      fromElement: true,
      // Size of the editor
      height: '100%',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      plugins: ['gjs-blocks-basic'],
      // Avoid any default panel
      layerManager: {
        appendTo: '.layers-container'
      },
      panels: { 
        defaults: [
          {
            id: 'layers',
            el: '.panel__right',
            // Make the panel resizable
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top handler
              cl: 1, // Left handler
              cr: 1, // Right handler
              bc: 1, // Bottom handler
              // Being a flex child we need to change `flex-basis` property
              // instead of the `width` (default)
              keyWidth: 'flex-basis',
            },
          },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [{
              id: 'show-layers',
              active: true,
              label: 'Layers',
              command: 'show-layers',
              // Once activated disable the possibility to turn it off
              togglable: true,
            },
            {
              id: 'show-style',
              active: false,
              label: 'Styles',
              // command: 'show-styles',
              togglable: true,
            }
          ],
          }
        ] 
      },
    
      blockManager: {
        appendTo: '#blocks',
        // blocks: [
        //   {
        //     id: 'section', // id is mandatory
        //     label: '<b>Section</b>', // You can use HTML/SVG inside labels
        //     attributes: { class:'gjs-block-section' },
        //     content: `<section>
        //       <h1>This is a simple title</h1>
        //       <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        //     </section>`,
        //   }, 
        //   {
        //     id: 'text',
        //     label: 'Text',
        //     content: '<div data-gjs-type="text">Insert your text here</div>',
        //   }, 
        //   {
        //     id: 'image',
        //     label: 'Image',
        //     // Select the component once it's dropped
        //     select: true,
        //     // You can pass components as a JSON instead of a simple HTML string,
        //     // in this case we also use a defined component type `image`
        //     content: { type: 'image' },
        //     // This triggers `active` event on dropped components and the `image`
        //     // reacts by opening the AssetManager
        //     activate: true,
        //   }
        // ]
      },
      selectorManager: {
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
          name: 'General',
          open: false,
          buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        },{
          name: 'Dimension',
          open: false,
          buildProps: [ 'width', 'height', 'max-width', 'min-height', 'margin', 'padding']
        },{
          name: 'Typography',
          open: false,
          buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
        },{
          name: 'Decorations',
          open: false,
          buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        },{
          name: 'Extra',
          open: false,
          buildProps: ['opacity', 'transition', 'perspective', 'transform'],
          properties: [{
            type: 'slider',
            property: 'opacity',
            defaults: 1,
            step: 0.01,
            max: 1,
            min:0,
          }]
        }]
      },
      
      traitManager: {
        appendTo: '#traits-container',
      }
    });
    
  }
  add_block() {
    this.add_layers_block = true;
  }
  close_block() {
    this.add_layers_block = false;
  }
}
