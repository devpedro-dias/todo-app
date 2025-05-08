import InputLabel from "./InputLabel"

const Input = ({ label, ...props }) => {
    return (
      <div className="flex flex-col space-y-1 text-left">
        <InputLabel htmlFor={props.id}>{label}</InputLabel>
        <input
          className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
          {...props}
        />
      </div>
    )
  }
  
  export default Input