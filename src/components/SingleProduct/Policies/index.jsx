import { POLICIES } from '@/lib/contstants';
import styles from './index.module.scss';

const Policies = () => {
  return (
    <div aria-labelledby='policies-heading' className={styles.policiesContainer}>
      <h2 id='policies-heading'>Our Policies</h2>

      <dl className={styles.policiesGrid}>
        {POLICIES.map((policy) => (
          <div key={policy.name} className={styles.policyCard}>
            <dt>
              <policy.icon className={styles.policyIcon} aria-hidden='true' />
              <span className={styles.policyName}>{policy.name}</span>
            </dt>
            <dd className={styles.policyDesc}>{policy.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Policies;
