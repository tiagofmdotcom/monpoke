import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './item-card'
import { getProductTypeColor } from '~/state/products'

const meta: Meta = {
  title: 'Components/Item Card',
  render: (args) => html`<item-card .name=${args.name} .imageUrl=${args.imageUrl} .types=${args.types}></item-card>`,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Item card',
    imageUrl: 'https://placekittens.com/200/200',
    types: [
      { id: 12, name: 'grass', color: getProductTypeColor(11) },
      { id: 10, name: 'fire', color: getProductTypeColor(9) },
      { id: 11, name: 'water', color: getProductTypeColor(10) },
    ],
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {}
