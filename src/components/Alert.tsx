import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RootState } from '../store';


interface AlertProps {
    alerts: any;
}

const Alert: React.FC<AlertProps> = ({ alerts }) => (
  <div className="alert-wrapper">
    {alerts.map((alert: any) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))}
  </div>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state: RootState) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
