module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  const contract = await deploy("BatchDeposit", {
    from: deployer,
    contract: "BatchDeposit",
    log: true,
    args: [],
  })


}
