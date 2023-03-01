import React, { useState } from 'react'
import { FaBars, FaCaretDown, FaFile } from 'react-icons/fa'

function SideNavbar() {
  const [listVisible, setListVisible] = useState(false)
  const [isSidebarVisible, setSidebarVisible] = useState(false)
  // TODO: documents will be fetched from server
  const documents = [{ name: 'Document1.md' }, { name: 'Document2.md' }]

  return (
    <>
      {!isSidebarVisible ? (
        <div className={`bg-slate-700 p-5`}>
          <FaBars
            className={'text-white'}
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          />
        </div>
      ) : null}
      {isSidebarVisible ? (
        <div className={'flex flex-row'}>
          <div className={'w-1/5 h-screen bg-slate-800'}>
            <div className="p-7 text-white">MARKDOWN EDITOR</div>
            <div
              className={
                'flex flex-row justify-between bg-slate-700 p-5 text-sm text-slate-400'
              }
            >
              DOCUMENTS
              <FaCaretDown onClick={() => setListVisible(!listVisible)} />
            </div>
            {listVisible
              ? documents.map((document, index) => (
                  <div
                    key={index}
                    className={
                      'flex flex-row justify-between p-5 text-sm text-white'
                    }
                  >
                    {document.name}
                    <FaFile
                      className={'text-white'}
                      onClick={() => setListVisible(!listVisible)}
                    />
                  </div>
                ))
              : null}
            <div
              className={
                'flex bg-cyan-400 text-white  p-4 m-4 rounded text-sm justify-center'
              }
            >
              NEW DOCUMENT
            </div>
            <div
              className={
                'flex bg-slate-500 text-white  p-4 m-4 rounded text-sm justify-center'
              }
            >
              DELETE
            </div>
          </div>

          <div className={`bg-slate-700 p-5 w-screen h-14`}>
            <FaBars
              className={'text-white'}
              onClick={() => setSidebarVisible(!isSidebarVisible)}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default SideNavbar
