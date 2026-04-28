import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './grid-list'

const meta: Meta = {
  title: 'Components/Grid List',
  render: () => html`<grid-list></grid-list>`,
}

export default meta

type Story = StoryObj

export const Default: Story = {}
