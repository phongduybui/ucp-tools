import { Form, InputNumber, Button, Table, Tag } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/ucpSlice';

const Step2 = ({ onNextStep, onPrevStep }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const ucpData = useSelector((state) => state.ucp.data);

  const dataSource = [
    {
      key: '1',
      name: 'Simple',
      description:
        'External system that must interact with the system using a well-defined API',
      weight: 1,
      count: ucpData?.uaw?.simple,
      result: ucpData?.uaw?.simple ? ucpData?.uaw?.simple : null,
    },
    {
      key: '2',
      name: 'Average',
      description:
        'External system that must interact with the system using standard communication protocols (e.g. TCP/IP, FTP, HTTP, database)',
      weight: 2,
      count: ucpData?.uaw?.average,
      result: ucpData?.uaw?.average ? ucpData?.uaw?.average * 2 : null,
    },
    {
      key: '3',
      name: 'Complex',
      description: 'Human actor using a GUI application interface',
      weight: 3,
      count: ucpData?.uaw?.complex,
      result: ucpData?.uaw?.complex ? ucpData?.uaw?.complex * 3 : null,
    },
    {
      key: '4',
      result: ucpData?.uaw?.total || '-',
    },
  ];

  const calculateTotalUUCW = (values) => {
    const simple = values?.simple || 0;
    const average = values?.average || 0;
    const complex = values?.complex || 0;
    return simple * 1 + average * 2 + complex * 3;
  };

  const columns = [
    {
      title: 'Actor Classification',
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
      setData({ uaw: { ...values, total: calculateTotalUUCW(values) } })
    );
  };

  const handleSubmit = () => {
    form.validateFields().then(() => {
      form.submit();
      onNextStep();
    });
  };

  return (
    <>
      <Form form={form} className="py-4" onFinish={onFinish}>
        <Form.Item
          label="Simple Actors"
          name="simple"
          tooltip={{
            title:
              'External system that must interact with the system using a well-defined API',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input Simple Actors!',
            },
          ]}
        >
          <InputNumber min={0} className="w-full" placeholder="Enter..." />
        </Form.Item>
        <Form.Item
          label="Average Actors"
          name="average"
          tooltip={{
            title:
              'External system that must interact with the system using standard communication protocols (e.g. TCP/IP, FTP, HTTP, database)',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input Average Actors!',
            },
          ]}
        >
          <InputNumber min={0} className="w-full" placeholder="Enter..." />
        </Form.Item>
        <Form.Item
          label="Complex Actors"
          name="complex"
          tooltip={{
            title: 'Human actor using a GUI application interface',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input Complex Actors!',
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
          disabled={!ucpData?.uaw?.total}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step2;
