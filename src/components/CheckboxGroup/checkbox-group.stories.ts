import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { fn } from 'storybook/test';
import { html } from 'lit'
import './checkbox-group'
import { getProductTypeColor } from '~/state/products'

const meta: Meta = {
  title: 'Components/Checkbox Group',
  args: {
    label: 'Pokemon type',
    options: [
      { label: 'Grass', value: 'grass', color: getProductTypeColor(11) },
      { label: 'Fire', value: 'fire', color: getProductTypeColor(9) },
      { label: 'Water', value: 'water', color: getProductTypeColor(10) },
    ],
    value: ['grass'],
    change: fn(),
  },
  render: (args) => html`
    <checkbox-group
      label=${args.label}
      .options=${args.options}
      .value=${args.value}
      @change=${args.change}
    ></checkbox-group>
  `,
}

export default meta

type Story = StoryObj

export const Default: Story = {}
