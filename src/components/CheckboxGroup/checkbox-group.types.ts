import type { TemplateResult } from 'lit';

export type CheckboxGroupLabel = string | TemplateResult

export type CheckboxGroupOption = {
  label: string
  value: string
}

export type CheckboxGroupChangeEvent = CustomEvent<{
  value: string[]
}>
