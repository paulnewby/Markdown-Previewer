import React from 'react';
import './App.css';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
handleChange = (e) => {
  this.setState({
    text: e.target.value
  })
} 
  render() {
    const { text } = this.state;

    const markdown = marked(text);

    return (
      <div id="app" class="container">
        <div>
          <h1 className="text-center"><b>Markdown Previewer</b></h1>
          <div className="row">
            <div className="col-6">
              <h2 className="text-center"><b>Enter your markdown here:</b></h2>
              <textarea className="form-control" id="editor" value={text} onChange={this.handleChange}/>
            </div>
            <h2 className="text-center"><b>And see the output below!</b></h2>
          <div className="preview" dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    );
  }
};


const placeholder = 
`
# Basic Markup:

## Headings: 

To create a heading, simply include 1 hashtag for a h1 element, two hashtags for a h2, and so on.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

### Italics:

There are two ways of creating italics. You can either wrap the text that you are trying to make italic in asterisks, or you can wrap them in underscores.

*This text* is italic
_This text_ is also italic


### Strong:

**This text** is strong
__This text__ is also strong

### Escaped Text:

\*This is an escaped italic\*
\**This is an escaped strong\**

### Strikethrough: 
~~This text~~ is strikethrough

### Horizontal Rule:

--- Here is a horizontal rule
___ Here is another horizontal rule

### Blockquotes: 

To create a quote in markdown, simply 
> This is a quote

### Links:
[Wikipedia](https://en.wikipedia.org/wiki/Markdown)

To view a title when the cursor hovers over a link, you can include quotes before the closing parenthesis. Try hovering the cursor over the link below:

[Wikipedia](https://en.wikipedia.org/wiki/Markdown "Markdown")

### Unordered Lists:

It is easy to create an unordered list in markdown. You can simply use a single asterisk to represent each item in the list. This markdown previewer covers the following markdown:

* Headings
* Italics
* Strong
* Escaped Text
* Strikethrough
* Horizontal Rule
* Blockquotes
* Links
* Unordered Lists
* Ordered Lists
* Nested Items
* Ordered Lists
* Inline Code Blocks
* Images

### Nested Items

To create a nested item, press tab to indent the text:

* Alpha
* Beta 
* Gamma
  * Delta
  * Epsilon
  * Zeta

### Ordered Lists:

Creating ordered lists is very easy. Just put the letter one followed by a dot.
1. Eta
1. Theta
1. Nu 
1. Tau

### Inline Code Block: 

To create an inline code block in markdown, use a backtick.

### Images:

This is very similar to links, except that you include an exclamation mark before the brackets.

![Markdown Logo](https://browserengine.net/wp-content/uploads/1441861327mdh-logo-new.png)

### This concludes the instuctions on how to use basic markup. More complex instructions for markup using Github etc can be found online. Try entering some of your own markup into the input field above, and see what comes out!

`

export default App;
