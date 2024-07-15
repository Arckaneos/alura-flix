function Footer() {
  return (
    <footer className='border-t-4 bg-white border-white p-4 flex justify-center mt-6'>
      <p>
        <strong className="text-black">Reto de</strong>{' '}
        <a className='text-red-500' href='https://www.aluracursos.com/'>
          Alura Latam
        </a>
        <strong className="text-black">, Modificado por</strong>{' '}
        <a className='text-red-500' href='https://github.com/Arckaneos'>
          Daniel Ramos
        </a>
        , <strong className="text-black">Agradacimientos a</strong>{' '}
        <a className='text-red-500' href='https://github.com/StalinAM'>
          StalinAM
        </a>
      </p>
    </footer>
  )
}

export default Footer
