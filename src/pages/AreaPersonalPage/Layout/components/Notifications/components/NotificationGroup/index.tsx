
import { useState } from "react";
import { notificationData } from "../../../../../../../mocks/mocks";
import css from "../../styles.module.scss";

const NotificationGroup = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleCheckboxChange = (id: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (checkedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      {notificationData.map((item) => {
         const id = `notification${item.id}`;
         const isChecked = checkedItems.has(id);

        const day =
          item.date.getDate() +
          "." +
          item.date.getMonth() +
          "." +
          item.date.getFullYear();
        const time = item.date.getHours() + ":" + item.date.getMinutes();
        return (
          <div className={css.notificationContainer} key={item.id}>
            <div className={css.notificationItem}>
              <label htmlFor={id}>
                <input
                  type="checkbox"
                  name={id}
                  id={id}
                  className={css.checkbox}
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(id)}
                />
                <span className={css.fake}></span>
                <span className={css.text}>{item.text}</span>
              </label>
            </div>
            <div className={css.time}>
              {day} {time}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NotificationGroup;
