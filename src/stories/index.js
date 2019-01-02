import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withReadme, withDocs, doc} from 'storybook-readme'

import { Button, Welcome } from '@storybook/react/demo'
import App from '../App'

// markdown文档
import doc1 from '../markdown/1-doc.md'
import doc2 from '../markdown/2-mobx-share.md'
import md_freeze from '../markdown/freeze.md'
import md_defineProperty from '../markdown/defineProperty.md'

// 加载decorator测试
import Dr1 from '../decorator/test'

// Object.defineProperty
import TestFreeze from '../defineProperty/freeze'

// import '../prism.css'

storiesOf('Mobx Beyond', module)
  .add('资料汇总', () => <div />, {info: {text: doc1}})
  .add('Mobx V3 回顾', () => '', {info: {text: doc2}})
  .add('Mobx V4 & V5', () => <App />)
  .add('1. 装饰者模式', () =>  <div />)
  .add('2. Decorators in ES7', () => <div />)
  .add('3. Decorators使用场景和案例', () => <div />)
  .add('4. Object.defineProperty', () => <div />)
  .add('如何自己实现一个mobx', () => <div />)
  .add('decorator库', () => <div />)

storiesOf('Object.defineProperty', module)
  // .addDecorator(withDocs(doc))
  // .addDecorator(withDocs(md_freeze))
  // .addDecorator(withReadme(md_freeze))
  .add('Freeze', () => <TestFreeze />, {info: {text: md_freeze, inline: false, source: false, propTables: null}}) // 这里将文档放到切换里
  .add('定义', withReadme(md_defineProperty, () => <div />))
  // .add('定义', doc(md_defineProperty))

storiesOf('Decorator', module)
  .add('1. 类上的Decorator', () => <Dr1 />, {info: {text: doc1, inline: false}}) // 这里将文档放到切换里

storiesOf('Button2', module)
  .add('Button Component',
    () =>  <div/>,
    {info: {
        text: `
              description or documentation about my component, supports markdown
  
              ~~~js
              <Button>Click Here</Button>
              ~~~
            `,
      },
    }
  )


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
