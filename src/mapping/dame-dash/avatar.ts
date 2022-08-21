import { Nft } from "../../types/schema";
import { DAMEDASH_AVATAR_NFT_ADDRESS, DAMEDASH_AVATAR_STAKING_NFT_ADDRESS } from "../../utils/constant";
import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../../types/DameDashAvatar/RootNFT";

export function handleTransfer(event: Transfer): void {
  const nftId =
    DAMEDASH_AVATAR_NFT_ADDRESS + "-" + event.params.tokenId.toString();

  let entity = Nft.load(nftId);
  if (entity == null) entity = new Nft(nftId);

  if (event.params.to == Address.fromString(DAMEDASH_AVATAR_STAKING_NFT_ADDRESS)) return;

  entity.stake = "inactive";
  entity.owner = event.params.to;
  entity.tokenId = event.params.tokenId;
  entity.type = "avatar";

  entity.save();
}
