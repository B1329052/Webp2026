import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);
  const [keyword, setKeyword] = useState('');

  const openUrl =
    'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

  useEffect(() => {
    fetch(openUrl)
      .then((res) => res.json())
      .then((data) => {
        const newRows = data.map((item, index) => {
          return {
            id: index + 1,
            title: item.title || '',
            location:
              item.showInfo && item.showInfo.length > 0
                ? item.showInfo[0].location
                : '',
            price:
              item.showInfo && item.showInfo.length > 0
                ? item.showInfo[0].price
                : '',
          };
        });

        setRows(newRows);
      })
      .catch((error) => {
        console.log('API error:', error);
      });
  }, []);

  const columns = [
    {
      field: 'title',
      headerName: '名稱',
      flex: 2,
    },
    {
      field: 'location',
      headerName: '地點',
      flex: 1,
    },
    {
      field: 'price',
      headerName: '票價',
      flex: 1,
    },
  ];

  const filteredRows = rows.filter((row) => {
    return row.title.includes(keyword);
  });

  return (
    <div className="App">
      <h1>景點觀光展覽資訊</h1>

      <input
        className="searchInput"
        type="text"
        placeholder="請輸入名稱關鍵字"
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
      />

      <div className="gridBox">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
                page: 0,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </div>
    </div>
  );
}

export default App;