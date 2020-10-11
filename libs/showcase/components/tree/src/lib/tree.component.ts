import { Component, Inject } from "@angular/core";
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [HighlightService]
})
export class TreeComponent {

  animateExpand: boolean;
  label: String = "name"
  nodes = [
    {
      id: 1,
      name: 'root1', expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      children: [
        { id: 2, name: 'child1' },
        {
          id: 3, name: 'child2', children: [
            { id: 4, name: 'subChild2.1' },
            {
              id: 5, name: 'subChild2.2', children: [
                { id: 6, name: 'subsubChild2.2.1' },
                { id: 7, name: 'subsubChild2.2.2' }
              ]
            }
          ]
        }
      ],
    },
    {
      id: 8,
      name: 'root2', expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      children: [
        { id: 9, name: 'child3' },
        { id: 10, name: 'child4' }
      ],
    },

  ];

  options = {
  };

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofTreeModule } from 'framework-front-softilys';
    imports : [SofTreeModule ];`
  }

  SelectAllPre() {
    let code = this.getPrerequis();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentt').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test11';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('tr1').style.height = '184px';
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n &lt;sof-tree [nodes]=" + "\"" + "nodes" + "\"" + " " + "[label]=" + "\"" + this.label + "\"" + ' (onNodeSelect)="catchSelectedNode($event)"' + ">&lt;/sof-tree>";
  }

  SelectAll() {
    let code = this.getHtmlCode();
    let codeF;
    var regex = /&lt;/gi;
    codeF = code.replace(regex, "<");
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parent').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test1';
    (textnode as HTMLTextAreaElement).value = codeF;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o').style.height = '184px';
  }

  getTsCode() {
    return " \n nodes = [\n" +
      "{\n" +
      " id: 1,\n" +
      " name: 'root1',\n" +
      " children: [\n" +
      " { id: 2, name: 'child1' },\n" +
      " { id: 3, name: 'child2', children: [\n" +
      "    { id: 4, name: 'subChild2.1' },\n" +
      " { id: 5, name: 'subChild2.2', children: [\n" +
      "  { id: 6, name: 'subsubChild2.2.1' },\n" +
      " { id: 7, name: 'subsubChild2.2.2' }\n" +
      "  ] }\n" +
      "  ] }\n" +
      " ],\n" +
      "},\n" +
      " {\n" +
      " id: 8,\n" +
      "  name: 'root2',\n" +
      "  children: [\n" +
      "   { id: 9, name: 'child3' },\n" +
      "  { id: 10, name: 'child4' }\n" +
      " ],\n" +
      " }\n" +
      "];\n\n" +
      " label = 'name';\n\n" +
      'catchSelectedNode(node) {\n' +
      '//node contains the selected node...\n' +
      '}'
  }

  SelectAllTs() {
    let code = this.getTsCode();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parenty').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test21';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o2').style.height = '778px';
  }

  str2DOMElement(html) {
    var frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    document.body.removeChild(frame);
    return el;
  }

  catchSelectedNode(node) {
  }

}