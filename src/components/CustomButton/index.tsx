import { ButtonPropsType } from '../../types';

const CustomButton = ({
  disabled,
  designs,
  title,
  btnType,
  rIcon,
  handleClick,
}: ButtonPropsType) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={btnType}
      className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white`}
    >
      <span className="flex-1">{title}</span>

      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;