
export const goToHomePage = (navigate) => {
  navigate("/")
}

export const goToListTripsPage = (navigate) => {
  navigate("/trips/list")
}

export const goToApplicationPage = (navigate,id) => {
  navigate(`/trips/application/${id}`)
}

export const goToLoginPage = (navigate) => {
  navigate("/login")
}

export const goToAdminHomePage = (navigate) => {
  navigate("/admin/trips/list")
}

export const goToDetailsPage = (navigate, id) => {
  navigate(`/admin/trips/${id}`)
}

export const goToCreatePage = (navigate) => {
  navigate("/admin/trips/create")
}

export const goBack = (navigate) => {
  navigate(-1)
}
