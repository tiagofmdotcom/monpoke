import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './item-card'

const meta: Meta = {
  title: 'Components/Item Card',
  render: () => html`<item-card></item-card>`,
}

export default meta

type Story = StoryObj

export const Default: Story = {}
