import { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Common from '../../apiEndPoints/common';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader?.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const FileUpload = ({imageUrl,setImageUrl,mediaType,mediaFor}) => {
  const [loading, setLoading] = useState(false);
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(info.file.response?.data?.basePath);
        console.log('http://localhost:5050/',info.file.response?.data?.basePath);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
  </div>
  );
  return (
    <>
      <Upload
        name="image"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action={Common.media(mediaFor,mediaType)}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            className='avatar-preview'
            src={`http://localhost:5050/${imageUrl}`}
            alt="avatar"
            style={{
              width: '100%',
              borderRadius:"50%"
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};
export default FileUpload;