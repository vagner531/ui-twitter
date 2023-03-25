import { Sidebar } from "../components/Sidebar";


export function Default() {
  return(
    <div className="layout">
    <Sidebar />

    <div className="content">
      {/* <RouterProvider router={router} /> */}
    </div>
  </div>
  )
}