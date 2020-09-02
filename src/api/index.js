import { client, q } from '../config/db'

export const getAllProjects = client
  .query(q.Paginate(q.Match(q.Ref('indexes/Projects'))))
  .then(res => {
    const projectsQuery = res.data.map(ref => {
      return q.Get(ref)
    })
    return client.query(projectsQuery).then(data => data)
  })
  .catch(e => console.error('Error:', e.message))
