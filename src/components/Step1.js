import { Form, InputNumber, Button, Table, Tag } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/ucpSlice';

const Step1 = ({ onNextStep, onPrevStep }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const ucpData = useSelector((state) => state.ucp.data);

  const dataSource = [
    {
      key: '1',
      name: 'Simple',
      description: 'Contain 1-3 transactions',
      weight: 5,
      count: ucpData?.uucw?.simpleUC,
      result: ucpData?.uucw?.simpleUC ? ucpData?.uucw?.simpleUC * 5 : null,
    },
    {
      key: '2',
      name: 'Average',
      description: 'Contain 4-7 transactions',
      weight: 10,
      count: ucpData?.uucw?.averageUC,
      result: ucpData?.uucw?.averageUC ? ucpData?.uucw?.averageUC * 10 : null,
    },
    {
      key: '3',
      name: 'Complex',
      description: '8 or more transactionns',
      weight: 15,
      count: ucpData?.uucw?.complexUC,
      result: ucpData?.uucw?.complexUC ? ucpData?.uucw?.complexUC * 15 : null,
    },
    {
      key: '4',
      result: ucpData?.uucw?.total || '-',
    },
  ];

  const calculateTotalUUCW = (values) => {
    const simple = values?.simpleUC || 0;
    const average = values?.averageUC || 0;
    const complex = values?.complexUC || 0;
    return simple * 5 + average * 10 + complex * 15;
  };

  const columns = [
    {
      title: 'Use Case Classification',
      dataIndex: 'name',
      render: (name) => <strong>{name}</strong>,
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: '',
      dataIndex: 'mul',
      render: (_, record, index) => index < 3 && 'x',
      key: 'mul',
    },
    {
      title: 'Number of Use Cases',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Result',
      dataIndex: 'result',
      render: (result, record, index) => (
        <Tag
          color={index < 3 ? '#108ee9' : 'green'}
          className={index === 3 && 'text-xl'}
        >
          {result}
        </Tag>
      ),
      key: 'result',
    },
  ];

  const onFinish = (values) => {
    console.log({ values });
    dispatch(
      setData({ uucw: { ...values, total: calculateTotalUUCW(values) } })
    );
  };

  return (
    <>
      <Form form={form} className="my-8" onFinish={onFinish}>
        <Form.Item
          label="Number of simple Use Cases"
          name="simpleUC"
          tooltip={{
            title: 'Contains 1-3 transactions',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your number of simple Use Cases!',
            },
          ]}
        >
          <InputNumber min={0} className="w-full" placeholder="Enter..." />
        </Form.Item>
        <Form.Item
          label="Number of average Use Cases"
          name="averageUC"
          tooltip={{
            title: 'Contains 4-7 transactions',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your number of average Use Cases!',
            },
          ]}
        >
          <InputNumber min={0} className="w-full" placeholder="Enter..." />
        </Form.Item>
        <Form.Item
          label="Number of complex Use Cases"
          name="complexUC"
          tooltip={{
            title: 'Contains >= 8 transactions',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your number of complex Use Cases!',
            },
          ]}
        >
          <InputNumber min={0} className="w-full" placeholder="Enter..." />
        </Form.Item>
      </Form>
      <Table
        key="key"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        // footer={() => <div className="justify-end text-right">380</div>}
      />
      <div className="flex items-center justify-center">
        <Button
          onClick={form.submit}
          type="primary"
          className="text-lg flex items-center justify-center mt-6 bg-blue-400"
        >
          Calculate
        </Button>
        <Button
          onClick={onNextStep}
          type="primary"
          className="ml-6 text-lg flex items-center justify-center mt-6 bg-blue-400"
          disabled={!ucpData?.uucw?.total}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step1;
