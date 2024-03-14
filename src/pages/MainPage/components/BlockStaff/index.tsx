import SliderBlock from "../../../../components/Slider/SliderBlock";
import { useAppSelector } from "../../../../services/type-service";
import css from "./styles.module.scss";
import TitleSection from "../../../../components/Title/Title";
import { API_URL } from "../../../../services/api";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../../const/route";
import Spinner from "../../../../components/Spinner";
import { LoadingStatus } from "../../../../const/const";

const StaffPage = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const StaffInfo = main?.Teachers;

  const length = StaffInfo?.length;

  const statusPersonal = useAppSelector(
    (state) => state.main.isTeachersLoading
  );

  return (
    <section className={css.personal}>
      <TitleSection title="Персонал" />
      {statusPersonal === LoadingStatus.Pending ? (
        <div className={css.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <>
          {StaffInfo && length && length > 4 ? (
            <SliderBlock staffInfo={StaffInfo} />
          ) : (
            <div className={css.staffInfo}>
              {StaffInfo &&
                StaffInfo.map((teacher) => (
                  <div key={teacher.idTeachers} className={css.block}>
                    <div className={css.photoContainer}>
                      <div className={css.photoItem}>
                        <div className={css.photoBody}>
                          <img
                            src={`${API_URL}${teacher.photoTeachers}`}
                            alt="staffPhoto"
                            className={css.staffPhoto}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={css.staffDescr}>
                      <h5>{teacher.teachersName}</h5>
                      <p>{teacher.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
          {!StaffInfo && (
            <p className={css.atention}>
              Здесь еще нет персонала. Добавить его можно в личном кабинете
              <Link to={`${AppRoute.AdministratorArea}/personal`}>
                {" "}
                администратора
              </Link>
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default StaffPage;
