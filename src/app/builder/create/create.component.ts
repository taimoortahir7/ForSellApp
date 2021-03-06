import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServicesService } from './../../services.service';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
import jquery from "jquery";
let editor;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterViewInit {
  $: JQueryStatic = jquery;
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

    // var index = 1;
    // editor.getComponents().add('<div>Text</div>', {at: index});

    
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
    bm.add('card-block', {
      id: 'cb1',
      label: `<div>
      <img src="./../../../assets/images/credit-card.svg" width="50px"/>
      </div>`,
      category: 'Snippets',
      render: ({ model, className }) => `<div class="${className}__my-wrap">
      ${model.get('label')}
      Card
      </div>`,
      content: {
        tagName: 'div',
        draggable: true,
        attributes: { title: 'card' },
        style: {
          width: 'fit-content',
          display: 'flex',
          margin: 'auto'
        },
        components: [
          {
            tagName: 'div',
            draggable: true,
            attributes: { title: 'card' },
            style: {
              background: '#ededed',
              padding: '20px',
              width: '400px',
              'border-radius': '10px',
              'text-align': 'center',
              margin: '20px'
            },
            components: [
              {
                tagName: 'div',
                style: {
                  color: '#3b3b3b'
                },
                components: '<h1>Interesting in buying abc.com</h1>',
              },
              {
                tagName: 'label',
                style: {
                  color: '#5e03fc',
                  'font-size': '20px'
                },
                components: '<h1>$500</h1>',
              },
              {
                tagName: 'label',
                style: {
                  color: '#737373'
                },
                components: '<p>Lorum ipsum dolor sit amet, consectetur adipiscing elit. Lorum ipsum dolor sit amet, consectetur adipiscing elit.</p>',
              },
              {
                tagName: 'button',
                type: 'button',
                style: {
                  width: '100px',
                  border: '0',
                  'border-radius': '10px',
                  background: '#5e03fc',
                  color: 'white'
                },
                script: function () {
                  // Do stuff using jquery
                  $(this).click(function(){
                    $( ".something" ).css( "display", "block" );
                  });
                },
                components: '<p>Buy</p>',
              },
              {
                tagName: 'a',
                type: 'link',
                style: {
                  'text-decoration': 'underline',
                  color: '#5e03fc'
                },
                traits: ['title', 'href', 'target'],
                content: '<p>Send custom offer</p>',
              }
            ]
          },
          {
            tagName: 'div',
            draggable: true,
            attributes: { title: 'card' },
            style: {
              background: '#ededed',
              padding: '20px',
              width: '400px',
              'border-radius': '10px',
              'text-align': 'center',
              margin: '20px',
              display: 'none'
            },
            script: function () {
              // Do stuff using jquery
              $(this).addClass('something');
            },
            components: [
              {
                tagName: 'div',
                style: {
                  color: '#5e03fc',
                  'text-decoration': 'underline'
                },
                components: '<h1>Send Your Offer</h1>',
              },
              {
                tagName: 'label',
                style: {
                  color: '#3b3b3b',
                  'font-size': '20px'
                },
                components: '<h4>Your Offer</h4>',
              },
              {
                tagName: 'input',
                type: 'number',
                attributes: { placeholder: "$500" },
                style: {
                  color: '#737373',
                  padding: '8px',
                  'border-radius': '5px',
                  border: 'none'
                },
              },
              {
                tagName: 'label',
                style: {
                  color: '#3b3b3b',
                  'font-size': '20px'
                },
                components: '<h4>Message</h4>',
              },
              {
                tagName: 'textarea',
                attributes: { rows: "5", placeholder: "Type here" },
                type: 'text',
                style: {
                  color: '#737373',
                  padding: '8px',
                  'border-radius': '5px',
                  border: 'none',
                  width: '90%'
                }
              },
              {
                tagName: 'button',
                type: 'button',
                style: {
                  width: '100px',
                  border: '0',
                  'border-radius': '10px',
                  background: '#5e03fc',
                  color: 'white',
                  margin: '20px auto 0px auto'
                },
                script: function () {
                  // Do stuff using jquery
                  $(this).click(function(){
                    alert('Hi');
                  });
                },
                components: '<p>Send</p>',
              }
            ]
          }
        ]
      }
    })
    bm.add('custom-block-2', {
      id: 'cb2',
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
      id: 'cb3',
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
    // const e = document.getElementsByTagName('button');
    // console.log('button: ', e);
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
      plugins: ['gjs-blocks-basic', 'gjs-component-countdown'],
      pluginsOpts: {
        'gjs-component-countdown': {
          // startTime: '2020-07-27 00:00',
          // endText: 'Expired',
          dateInputType: 'datetime-local',
          labelCountdownCategory: 'Timer'
        }
      },
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
      },

      canvas: {
        scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js']
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
