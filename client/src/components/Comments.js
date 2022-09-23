import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import NewComment from './crud_comments/NewComment'
import EditComment from './crud_comments/EditComment'
import DeleteComment from './crud_comments/DeleteComment'


export default function Comments({ comments, memoryId, author, authorUsername, getComments }) {
  const [isAddClicked, setIsAddClicked] = useState(false)

  const handleAddClick = () => {
    setIsAddClicked(!isAddClicked)
  }

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header style = {{fontFamily: "Manrope"}}>Comments</Accordion.Header>
          <Accordion.Body style={{overflowY: 'scroll', height: 'auto' }}>

            

            {comments !== '' && comments.length > 1 && comments.map(com => (
              <Card key={com._id} style = {{border: "none"}}>
                <Card.Body>
                  <Card.Title style = {{fontFamily: "Manrope", fontSize: '12px', textDecoration: "underline"}}>{com.author}</Card.Title> {/*this will change to be user.name from auth0 user */}
                  <Card.Text>
                    {com.body}
                  </Card.Text>
                  <Card.Footer style={{display:'flex', justifyContent:'space-between',fontSize: "12px", backgroundColor: "#29E7CD",borderRadius: "5px", height: 'auto', color: "#ffffff"}}>
                    {/*edit comment button */}{/*delete comment button */}
                    {com.author === author && <><EditComment memoryId={memoryId} body={com.body} author={author} getComments={getComments} commentId={com._id}/> <DeleteComment getComments={getComments} commentId={com._id} /></>}
                  </Card.Footer>
                </Card.Body>
              </Card>))}

            {comments !== '' && comments.length === 1 &&
              <Card key={comments[0]._id} style = {{border: "none"}}>
                <Card.Body>
                  <Card.Title style = {{fontFamily: "Manrope", fontSize: '12px', textDecoration: "underline"}}>{comments[0].author}</Card.Title>
                  <Card.Text>
                    {comments[0].body}
                  </Card.Text>
                  <Card.Footer style={{display:'flex', justifyContent:'space-between', fontSize: "12px", backgroundColor: "#29E7CD",borderRadius: "5px", color: "#ffffff"}}>
                    {/*edit comment button */}{/*delete comment button */}
                    {comments[0].author === author && <><EditComment memoryId={memoryId} body={comments[0].body} author={author} getComments={getComments} commentId={comments[0]._id}/> <DeleteComment getComments={getComments} commentId={comments[0]._id}/></>}
                  </Card.Footer>
                  
                </Card.Body>
          
              </Card>}
              {/*add comment button */}
            <div style = {{fontFamily: "Titan One", letterSpacing: "1", display: "grid", textDecoration: "none", justifyContent:'center'}}>
              <i onClick={handleAddClick}>+ Add Comment</i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <NewComment getComments={getComments} author={author} memoryId={memoryId} handleAddClick={handleAddClick} isAddClicked={isAddClicked} />
    </>
  )
}
