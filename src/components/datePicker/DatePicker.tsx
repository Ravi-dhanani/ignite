import ReactDatePicker from "react-datepicker";

interface IDatePickerProps {
  placeholder?: string;
  dateFormat?: string;
  icon?: JSX.Element;
  value: Date | null | undefined;
  onChange: (date: Date) => void;
  className?: string;
}

export default function DatePicker(props: IDatePickerProps) {
  const { placeholder, dateFormat, value, onChange, icon, className } = props;

  return (
    <>
      <ReactDatePicker
        showIcon
        selected={value}
        onChange={onChange}
        className={`tw-border-[1.3px] tw-rounded-lg tw-border-[#b4c2c8] tw-w-full  ${
          className ? className : ""
        }`}
        dateFormat={dateFormat}
        placeholderText={placeholder ? placeholder : "dd/mm/yyyy"}
        icon={icon ? icon : <></>}
      />
    </>
  );
}
