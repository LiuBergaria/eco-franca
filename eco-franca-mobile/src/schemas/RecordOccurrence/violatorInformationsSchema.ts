import * as Yup from 'yup';

const violatorInformationsSchema = Yup.object().shape({
  violatorName: Yup.string(),
  violatorVehicle: Yup.string(),
  violatorAddress: Yup.string(),
  violatorOtherInformation: Yup.string(),
});

export default violatorInformationsSchema;
