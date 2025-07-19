import style from '../src/CohortDetails.module.css';
function CohortDetails(props) {
    
  const statusClass =
    props.cohort.currentStatus.toLowerCase() === 'ongoing'
      ? style.ongoing
      : style.default;
  

    return (
        <div className={style.box}>
            <h3 className={`${style.h3} ${statusClass}`}>
                {props.cohort.cohortCode} -
                <span>{props.cohort.technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{props.cohort.currentStatus}</dd>
                <dt className={style.dt}>Coach</dt>
                <dd>{props.cohort.coachName}</dd>
                <dt className={style.dt}>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>
        </div>

        
    );
}
export default CohortDetails;