export const OperatorTest = () => {
    return <div>
        {false || '1'}<hr/>
        {true || '2'}<hr/>
        {0 || '3'}<hr/>
        {1 || '4'}<hr/>
        {0 && '5'}<hr/>
        {1 && '6'}<hr/>
        {false && '7'}<hr/>
        {true && '8'}
  </div>
}
