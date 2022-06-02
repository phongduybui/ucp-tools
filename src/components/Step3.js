import { Form, InputNumber, Button, Table, Tag, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/ucpSlice';

const Step3 = ({ onNextStep, onPrevStep }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const ucpData = useSelector((state) => state.ucp.data);

  const dataSource = [
    {
      key: '1',
      name: 'T1',
      description: 'Distributed System',
      weight: 2,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t1"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T2',
      description: 'Response time/performance objectives',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t2"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T3',
      description: 'End-user efficiency',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t3"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T4',
      description: 'Internal processing complexity',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t4"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T5',
      description: 'Code reusability',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t5"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T6',
      description: 'Easy to install',
      weight: 0.5,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t6"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T7',
      description: 'Easy to use',
      weight: 0.5,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t7"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T8',
      description: 'Portability to other platforms',
      weight: 2,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t8"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T9',
      description: 'System maintenance',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t9"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T10',
      description: 'Concurrent/parallel processing',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t10"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T11',
      description: 'Security features',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t11"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T12',
      description: 'Access for third parties',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t12"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '2',
      name: 'T13',
      description: 'End user training',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="t13"
        >
          <Radio.Group>
            <Radio value={0}>0</Radio>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      key: '4',
      result: ucpData?.uaw?.total || '-',
    },
  ];

  const calculateTFTotal = (values) => {
    const {
      t1 = 0,
      t2 = 0,
      t3 = 0,
      t4 = 0,
      t5 = 0,
      t6 = 0,
      t7 = 0,
      t8 = 0,
      t9 = 0,
      t10 = 0,
      t11 = 0,
      t12 = 0,
      t13 = 0,
    } = values;
    return (
      t1 * 2 +
      t2 +
      t3 +
      t4 +
      t5 +
      0.5 * t6 +
      0.5 * t7 +
      2 * t8 +
      t9 +
      t10 +
      t11 +
      t12 +
      t13
    );
  };

  const columns = [
    {
      title: 'Factor',
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
      title: 'Rating',
      dataIndex: 'form',
      key: 'form',
    },
  ];

  const calculateTotal = (values) => {
    const tfTotal = calculateTFTotal(values);
    return Number(0.6 + tfTotal / 100);
  };

  const onFinish = async (values) => {
    console.log({ values });
    await dispatch(
      setData({
        tcf: {
          ...values,
          tfTotal: calculateTFTotal(values),
          total: calculateTotal(values),
        },
      })
    );
  };

  return (
    <>
      <Form form={form} onFinish={onFinish} className="my-8">
        <Table
          key="key"
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Form>

      <div className="bg-slate-500 text-white p-2 text-lg">
        <div>{`TF Total: ${ucpData?.tcf?.tfTotal || ''}`}</div>
        <div>{`TCF = 0.6 +(TF/100)`}</div>
        <strong>{`TCF = ${ucpData?.tcf?.total?.toFixed(2) || ''}`}</strong>
      </div>
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
          disabled={!ucpData?.tcf?.total}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step3;
