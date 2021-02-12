import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { intents } from '../common/intents';
import { IconName, Intent } from '..';
import { RoundButton } from './RoundButton';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Core/Components/Button',
  component: Button,
} as Meta;

const Template = (args: ButtonProps) => <Button {...args} />;

const AllIntents: React.FC<Partial<ButtonProps>> = props => {
  return (
    <div>
      {intents.map(intent => (
        <Button key={intent} intent={intent} {...props} />
      ))}
    </div>
  );
};

export const AllButtons = () => {
  return (
    <div>
      <AllIntents children="Create Account" />
      <AllIntents children="Create Account" icon={IconName.AddCircle} />
      <AllIntents children="Create Account" rightIcon={IconName.ChevronRight} />
      <AllIntents children="Create Account" large={true} icon={IconName.AddCircle} />
      <AllIntents children="Create Account" small={true} icon={IconName.AddCircle} />
      <AllIntents children="Create Account" minimal={true} icon={IconName.AddCircle} />
      <AllIntents children="Create Account" outlined={true} icon={IconName.AddCircle} />
      <AllIntents children="Disabled Button" disabled={true} icon={IconName.AddCircle} />
      <AllIntents children="Disabled Button" disabled={true} outlined={true} icon={IconName.AddCircle} />
      <AllIntents children="Disabled Button" disabled={true} minimal={true} icon={IconName.AddCircle} />
      <AllIntents children="Active Button" active={true} icon={IconName.AddCircle} />
      <AllIntents children="Active Button" active={true} outlined={true} icon={IconName.AddCircle} />
      <AllIntents children="Active Button" active={true} minimal={true} icon={IconName.AddCircle} />
      <AllIntents children="Create Account" loading={true} icon={IconName.AddCircle} />
      <AllIntents icon={IconName.AddCircle} small={true} />
      <AllIntents icon={IconName.AddCircle} />
      <AllIntents icon={IconName.AddCircle} large={true} />
      <AllIntents icon={IconName.AddCircle} small={true} minimal={true} />
      <AllIntents icon={IconName.AddCircle} minimal={true} />
      <AllIntents icon={IconName.AddCircle} large={true} minimal={true} />
      <AllIntents icon={IconName.AddCircle} small={true} outlined={true} />
      <AllIntents icon={IconName.AddCircle} outlined={true} />
      <AllIntents icon={IconName.AddCircle} large={true} outlined={true} />
      <AllIntents
        children={
          <div>
            Large text
            <br />
            content
          </div>
        }
        large={true}
        css={{ width: '200px', height: '80px' }}
      />
      <p>
        <Button fill>Filled Button</Button>
      </p>
      <p>
        <Button fill small>
          Filled Button
        </Button>
      </p>
      <p>
        <Button fill>Filled Button</Button>
      </p>
      <p>
        <Button fill large>
          Filled Button
        </Button>
      </p>
      <p>
        <Button fill minimal>
          Filled Button
        </Button>
      </p>
      <p>
        <Button fill outlined>
          Filled Button
        </Button>
      </p>
    </div>
  );
};

export const ButtonGroups: React.FC = () => (
  <div>
    <p>
      <ButtonGroup intent={Intent.Primary}>
        <Button icon={IconName.Dashboard}>Hello</Button>
        <Button>From some</Button>
        <Button intent={Intent.Danger}>Buttons</Button>
      </ButtonGroup>
    </p>
    <p>
      <ButtonGroup>
        <Button>About me</Button>
        <Button>My projects</Button>
        <Button intent={Intent.Primary}>My Github</Button>
        <Button>More</Button>
      </ButtonGroup>
    </p>
    <p>
      <ButtonGroup large={true} minimal={true}>
        <Button>Hello</Button>
        <Button icon={IconName.AddLocation}>From some</Button>
        <Button icon={IconName.AddLocation}>Buttons</Button>
      </ButtonGroup>
    </p>
    <p>
      <ButtonGroup small={true} outlined={true} rightIcon={IconName.Dashboard}>
        <Button>Hello</Button>
        <Button icon={IconName.AddLocation}>From some</Button>
        <Button>Buttons</Button>
      </ButtonGroup>
    </p>
    <p>
      <ButtonGroup fill={true}>
        <Button>Filled</Button>
        <Button>Buttons</Button>
        <Button>Yay</Button>
      </ButtonGroup>
    </p>
  </div>
);

export const RoundButtons: React.FC = () => (
  <div>
    <div>
      {intents.map(i => (
        <RoundButton icon={IconName.AccessAlarm} key={i} intent={i} size={1} />
      ))}
    </div>
    <div>
      {intents.map(i => (
        <RoundButton icon={IconName.AccessAlarm} key={i} intent={i} size={2} />
      ))}
    </div>
    <div>
      {intents.map(i => (
        <RoundButton icon={IconName.AccessAlarm} key={i} intent={i} size={3} />
      ))}
    </div>
    <div>
      {intents.map(i => (
        <RoundButton icon={IconName.AccessAlarm} key={i} intent={i} size={4} />
      ))}
    </div>
  </div>
);
