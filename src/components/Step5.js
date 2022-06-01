/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/ucpSlice';

const Step5 = () => {
  const ucpData = useSelector((state) => state.ucp.data);
  const { uucw, uaw, tcf, ecf, finalValue } = ucpData;
  const dispatch = useDispatch();

  useEffect(() => {
    const finalValue = (uucw?.total + uaw?.total) * tcf?.total * ecf?.total;

    dispatch(
      setData({
        finalValue,
      })
    );
  }, []);

  return (
    <div className="my-8">
      <div className="bg-gray-500 text-white p-3 mt-6 text-lg mb-6">
        <p>The UCP is calculated based on the following formula:</p>
        <p>UCP = (UUCW + UAW) x TCF x ECF</p>
      </div>

      <div className="bg-green-300  p-3 mt-6 text-lg">
        <p>{`UCP = (${uucw?.total?.toFixed(2) || 0} + ${
          uaw?.total?.toFixed(2) || 0
        }) x ${tcf?.total?.toFixed(2) || 0} x ${
          ecf?.total?.toFixed(2) || 0
        } `}</p>
        {!!finalValue && (
          <p className="mt-4">
            Your project contains <strong>{finalValue}</strong> Use Case Points.
          </p>
        )}
      </div>
    </div>
  );
};

export default Step5;
