import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './item-card'

const meta: Meta = {
  title: 'Components/Item Card',
  render: (args) => html`<item-card .name=${args.name} .imageUrl=${args.imageUrl} .types=${args.types}></item-card>`,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Item card',
    imageUrl: 'https://placekittens.com/200/200',
    types: ['grass', 'fire', 'water'],
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {}
