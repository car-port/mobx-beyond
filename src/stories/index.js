import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Button2', module)
  .add('Button Component',
    () =>  <div />,
    {info: {
        text: `
              description or documentation about my component, supports markdown
    
              ~~~js
              <Button>Click Here</Button>
              ~~~
            `,
      },
    }
  );

storiesOf('Mobx Beyond', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Decorator', module)
  .add('1. 装饰者模式', () => 'fdf')
  .add('2. Decorators in ES7', () => 'ffdf')
  .add('3. Decorators使用场景和案例', () => 'ffdf')

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
