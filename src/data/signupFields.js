import { SAMPLE_EMAIL } from '../content/xdCopy'

export const signupFields = [
  {
    id: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Marry Doe',
    defaultValue: 'Marry Doe',
    required: true,
    autoComplete: 'name',
  },
  {
    id: 'phone',
    label: 'Phone number',
    type: 'tel',
    placeholder: '9876543210',
    defaultValue: '9876543210',
    required: true,
    autoComplete: 'tel',
  },
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: SAMPLE_EMAIL,
    defaultValue: SAMPLE_EMAIL,
    required: true,
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    required: true,
    autoComplete: 'new-password',
  },
  {
    id: 'company',
    label: 'Company name',
    type: 'text',
    placeholder: 'Company Pvt. Ltd.',
    required: false,
    autoComplete: 'organization',
  },
]
