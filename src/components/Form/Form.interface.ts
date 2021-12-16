import React from 'react'

export interface FormPropsInterface {
  onSubmit?: React.FormEvent<HTMLFormElement>
  children?: React.ReactNode
}