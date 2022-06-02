import { FileExcelOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import React from 'react';
import ReactExport from 'react-export-excel-xlsx-fix';
import { useSelector } from 'react-redux';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export default function Export(props) {
  const ucpData = useSelector((state) => state.ucp.data);

  const step1 = {
    columns: [
      {
        title: 'Use Case Classification',
        dataIndex: 'name',
        render: (name) => <strong>{name}</strong>,
        key: 'name',
        widthPx: 100,
        style: {
          font: { bold: true },
          fill: {
            patternType: 'solid',
            bgColor: { rgb: 'E8FF0000' },
          },
        },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        widthPx: 200,
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
        widthPx: 120,
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
    ],
    data: [
      {
        name: 'Simple',
        description: 'Contain 1-3 transactions',
        weight: 5,
        multi: 'x',
        count: ucpData?.uucw?.simpleUC,
        result: ucpData?.uucw?.simpleUC ? ucpData?.uucw?.simpleUC * 5 : null,
      },
      {
        name: 'Average',
        description: 'Contain 4-7 transactions',
        weight: 10,
        multi: 'x',
        count: ucpData?.uucw?.averageUC,
        result: ucpData?.uucw?.averageUC ? ucpData?.uucw?.averageUC * 10 : null,
      },
      {
        name: 'Complex',
        description: '8 or more transactionns',
        weight: 15,
        multi: 'x',
        count: ucpData?.uucw?.complexUC,
        result: ucpData?.uucw?.complexUC ? ucpData?.uucw?.complexUC * 15 : null,
      },
      {
        empty: '',
        empty2: '',
        empty3: '',
        empty4: '',
        empty5: '',
        result: `UUCW = ${ucpData?.uucw?.total}` || '-',
      },
    ],
  };

  const step2 = {
    columns: [
      {
        title: 'Actor Classification',
        dataIndex: 'name',
        render: (name) => <strong>{name}</strong>,
        key: 'name',
        widthPx: 100,
        style: {
          font: { bold: true },
          fill: {
            patternType: 'solid',
            bgColor: { rgb: 'E8FF0000' },
          },
        },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        widthPx: 300,
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
        widthPx: 60,
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
    ],
    data: [
      {
        name: 'Simple',
        description:
          'External system that must interact with the system using a well-defined API',
        weight: 1,
        mul: 'x',
        count: ucpData?.uaw?.simple,
        result: ucpData?.uaw?.simple ? ucpData?.uaw?.simple : null,
      },
      {
        name: 'Average',
        description:
          'External system that must interact with the system using standard communication protocols (e.g. TCP/IP, FTP, HTTP, database)',
        weight: 2,
        mul: 'x',
        count: ucpData?.uaw?.average,
        result: ucpData?.uaw?.average ? ucpData?.uaw?.average * 2 : null,
      },
      {
        name: 'Complex',
        description: 'Human actor using a GUI application interface',
        weight: 3,
        mul: 'x',
        count: ucpData?.uaw?.complex,
        result: ucpData?.uaw?.complex ? ucpData?.uaw?.complex * 3 : null,
      },
      {
        empty: '',
        empty2: '',
        empty3: '',
        empty4: '',
        empty5: '',
        result: `UAW = ${ucpData?.uaw?.total}` || '-',
      },
    ],
  };

  const step3 = {
    columns: [
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
        widthPx: 300,
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
    ],
    data: [
      {
        name: 'T1',
        description: 'Distributed System',
        weight: 2,
        rating: ucpData?.tcf?.t1,
      },
      {
        name: 'T2',
        description: 'Response time/performance objectives',
        weight: 1,
        rating: ucpData?.tcf?.t2,
      },
      {
        name: 'T3',
        description: 'End-user efficiency',
        weight: 1,
        rating: ucpData?.tcf?.t3,
      },
      {
        name: 'T4',
        description: 'Internal processing complexity',
        weight: 1,
        rating: ucpData?.tcf?.t4,
      },
      {
        name: 'T5',
        description: 'Code reusability',
        weight: 1,
        rating: ucpData?.tcf?.t5,
      },
      {
        name: 'T6',
        description: 'Easy to install',
        weight: 0.5,
        rating: ucpData?.tcf?.t6,
      },
      {
        name: 'T7',
        description: 'Easy to use',
        weight: 0.5,
        rating: ucpData?.tcf?.t7,
      },
      {
        name: 'T8',
        description: 'Portability to other platforms',
        weight: 2,
        rating: ucpData?.tcf?.t8,
      },
      {
        name: 'T9',
        description: 'System maintenance',
        weight: 1,
        rating: ucpData?.tcf?.t9,
      },
      {
        name: 'T10',
        description: 'Concurrent/parallel processing',
        weight: 1,
        rating: ucpData?.tcf?.t10,
      },
      {
        name: 'T11',
        description: 'Security features',
        weight: 1,
        rating: ucpData?.tcf?.t11,
      },
      {
        name: 'T12',
        description: 'Access for third parties',
        weight: 1,
        rating: ucpData?.tcf?.t12,
      },
      {
        name: 'T13',
        description: 'End user training',
        weight: 1,
        rating: ucpData?.tcf?.t13,
      },
      {
        empty1: '',
        empty2: '',
        empty3: '',
        result: `TCF = ${ucpData?.tcf?.total}` || '-',
      },
    ],
  };

  const step4 = {
    columns: [
      {
        title: 'Factor',
      },
      {
        title: 'Description',
        widthPx: 300,
      },
      {
        title: 'Weight',
      },
      {
        title: 'Rating',
      },
    ],
    data: [
      {
        name: 'E1',
        description: 'Familiarity with development process used',
        weight: 1.5,
        rating: ucpData?.ecf?.e1,
      },
      {
        name: 'E2',
        description: 'Application experience',
        weight: 0.5,
        rating: ucpData?.ecf?.e2,
      },
      {
        name: 'E3',
        description: 'Object-oriented experience of team',
        weight: 1,
        rating: ucpData?.ecf?.e3,
      },
      {
        name: 'E4',
        description: 'Lead analyst capability',
        weight: 0.5,
        rating: ucpData?.ecf?.e4,
      },
      {
        name: 'E5',
        description: 'Motivation of the team',
        weight: 1,
        rating: ucpData?.ecf?.e5,
      },
      {
        name: 'E6',
        description: 'Stability of requirements',
        weight: 2,
        rating: ucpData?.ecf?.e6,
      },
      {
        name: 'E7',
        description: 'Part-time staff',
        weight: -1,
        rating: ucpData?.ecf?.e7,
      },
      {
        name: 'E8',
        description: 'Difficult programming language',
        weight: -1,
        rating: ucpData?.ecf?.e8,
      },
      {
        empty1: '',
        empty2: '',
        empty3: '',
        result: `ECF = ${ucpData?.ecf?.total}` || '-',
      },
    ],
  };

  const step5 = {
    columns: [
      {
        title: 'Final Use Case Point',
        widthPx: 200,
      },
    ],
    data: [
      {
        value: `Your project contains ${ucpData?.finalValue?.toFixed(
          2
        )} Use Case Points.`,
      },
    ],
  };

  const getDataset = (step) => {
    return {
      ySteps: 3,
      columns: step.columns.map((item) => ({
        value: item.title,
        widthPx: item?.widthPx,
      })),
      data: step.data.map((item) => Object.values(item)),
    };
  };

  const datasets = [
    getDataset(step1),
    getDataset(step2),
    getDataset(step3),
    getDataset(step4),
    getDataset(step5),
  ];

  return (
    <ExcelFile
      filename="UCP_Data_Calculation"
      element={
        <div className="flex justify-center items-center">
          <Button
            type="primary"
            className="bg-green-500 rounded-md mt-6 text-lg flex justify-center items-center p-5"
            icon={<FileExcelOutlined />}
          >
            Export to Excel
          </Button>
        </div>
      }
    >
      <ExcelSheet dataSet={datasets} name="UCP Calculation - DTU" />
    </ExcelFile>
  );
}
