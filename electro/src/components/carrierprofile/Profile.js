import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='p-main-div'>
        <div className=''>
          <div className='image-side'>
            <div className='image-div'>
              <img src="" alt=''/>
            </div>
            <div>
              <button>mail</button>
              <button>call</button>
              <button>active/inactive</button>
            </div>
          </div>
          <div className='info-side'>
            <table>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h3>total delivered</h3><hr></hr>
              <h4>15</h4>
            </div>
            <div>
              <h3>total delivered</h3><hr></hr>
              <h4>15</h4>
            </div>
            <div>
              <h3>total delivered</h3><hr></hr>
              <h4>15</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;