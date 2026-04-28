import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './checkbox-group'

const meta: Meta = {
  title: 'Components/Checkbox Group',
  render: () => html`
    <checkbox-group
      label="Pokemon type"
      .options=${[
        { label: 'Grass', value: 'grass' },
        { label: 'Fire', value: 'fire' },
        { label: 'Water', value: 'water' },
      ]}
      .value=${['grass']}
    ></checkbox-group>
  `,
}

export default meta

type Story = StoryObj

export const Default: Story = {}
