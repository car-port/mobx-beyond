import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App'
import doc from '../markdown/1-doc.md'
import doc2 from '../markdown/2-mobx-share.md'

storiesOf('Mobx Beyond', module)
  .add('资料汇总', () => '', {info: {text: doc}})
  .add('Mobx V3 回顾', () => '', {info: {text: doc2}})
  .add('Mobx V4 & V5', () => <App />)
  .add('1. 装饰者模式', () =>  <div />)
  .add('2. Decorators in ES7', () => <div />)
  .add('3. Decorators使用场景和案例', () => <div />)
  .add('4. Object.defineProperty', () => <div />)
  .add('如何自己实现一个mobx', () => <div />)
  .add('decorator库', () => <div />)

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
