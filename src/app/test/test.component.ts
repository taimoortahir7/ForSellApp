import { Component, OnInit } from '@angular/core';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  private _editor: any;
  constructor() { }

  get editor() {
    return this._editor;
  }

  ngOnInit() {
    this._editor = this.initializeEditor();
    this.editor.on('asset:add', () => {
      console.log('Asset add fired');
      // this.editor.runCommand('open-assets');
    });
    var blockManager = this._editor.BlockManager;

  }
  private initializeEditor(): any {
    console.dir(window);
    return grapesjs.init({
      container: '#gjs',
      autorender: true,
      forceClass: false,
      components: '',
      style: '',
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          navbarOpts: false,
          countdownOpts: false,
          formsOpts: false,
          blocksBasicOpts: {
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3', 'div'],
            flexGrid: false,
            stylePrefix: 'lala-'
          }
        }
      },
      assetManager: {
        uploadText: 'Add image through link or upload image',
        modalTitle: 'Select Image',
        openAssetsOnDrop: 1,
        inputPlaceholder: 'http://url/to/the/image.jpg',
        addBtnText: 'Add image',
        uploadFile: (e) => {
          const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        },
        handleAdd: (textFromInput) => {
          this.editor.AssetManager.add(textFromInput);
        }
      },
      canvas: {
        components: [
          {
            tagName: 'div',
            components: [
              {
                type: 'image',
                attributes: { src: 'https://path/image' },
              }, {
                tagName: 'span',
                type: 'text',
                attributes: { title: 'foo' },
                components: [{
                  type: 'textnode',
                  content: 'Hello wdsforld!!!'
                }]
              }
            ]
          }
        ],          
        styles: [
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
        ],
        scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js']
      }
    });
  }
  
}
