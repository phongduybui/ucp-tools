import { Form, Button, Table, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/ucpSlice';

const Step4 = ({ onNextStep, onPrevStep }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const ucpData = useSelector((state) => state.ucp.data);

  const dataSource = [
    {
      key: '1',
      name: 'E1',
      description: 'Familiarity with development process used',
      weight: 1.5,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e1"
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
      name: 'E2',
      description: 'Application experience',
      weight: 0.5,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e2"
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
      name: 'e3',
      description: 'Object-oriented experience of team',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e3"
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
      name: 'e4',
      description: 'Lead analyst capability',
      weight: 0.5,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e4"
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
      name: 'e5',
      description: 'Motivation of the team',
      weight: 1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e5"
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
      name: 'e6',
      description: 'Stability of requirements',
      weight: 2,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e6"
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
      name: 'e7',
      description: 'Part-time staff',
      weight: -1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e7"
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
      name: 'e8',
      description: 'Difficult programming language',
      weight: -1,
      form: (
        <Form.Item
          rules={[{ required: true, message: 'This field is required!' }]}
          name="e8"
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

  const calculateEFTotal = (values) => {
    const {
      e1 = 0,
      e2 = 0,
      e3 = 0,
      e4 = 0,
      e5 = 0,
      e6 = 0,
      e7 = 0,
      e8 = 0,
    } = values;
    return (
      e1 * 1.5 + e2 * 0.5 + e3 + e4 * 0.5 + e5 + e6 * 2 + e7 * -1 + -1 * e8
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
    // {
    //   title: 'Result',
    //   dataIndex: 'result',
    //   render: (result, record, index) => (
    //     <Tag
    //       color={index < 3 ? '#108ee9' : 'green'}
    //       className={index === 3 && 'text-xl'}
    //     >
    //       {result}
    //     </Tag>
    //   ),
    //   key: 'result',
    // },
  ];

  const calculateTotal = (values) => {
    const efTotal = calculateEFTotal(values);
    const result = 1.4 + efTotal * -0.03;
    return Number(result);
  };

  const onFinish = async (values) => {
    console.log({ values });
    await dispatch(
      setData({
        ecf: {
          ...values,
          efTotal: calculateEFTotal(values),
          total: calculateTotal(values),
        },
      })
    );
  };

  return (
    <>
      <Form form={form} onFinish={onFinish} className="my-6">
        <Table
          key="key"
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Form>

      <div className="bg-slate-500 text-white">
        <div>{`EF Total: ${ucpData?.ecf?.efTotal || ''}`}</div>
        <div>{`ECF = 1.4 +(-0.03 x EF)`}</div>
        <strong>{`ECF = ${ucpData?.ecf?.total?.toFixed(2) || ''}`}</strong>
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
          disabled={!ucpData?.ecf?.total}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step4;
