import PropTypes from 'prop-types'

function Input(props) {
  const {type, onChange, value, placeholder, name} = props;
  return (
    <input className='w-full p-2 border border-gray-300 rounded-md'
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      name={name}
      required
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string
}

export default Input
