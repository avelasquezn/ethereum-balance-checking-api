import { Injectable } from '@nestjs/common';
import { ethers, JsonRpcProvider } from 'ethers';

const KEY = 'JXdhwdcgfdKMduVkqzWLPPt0bvSRv7Fe';

const ALCHEMY_URL = 'https://eth-mainnet.g.alchemy.com/v2/';

@Injectable()
export class AppService {
  private provider(): JsonRpcProvider {
    return new JsonRpcProvider(`${ALCHEMY_URL}${KEY}`);
  }

  async getBalance(address: string): Promise<number> {
    const provider = this.provider();
    const balance = await provider.getBalance(address);
    return Number(ethers.formatEther(balance));
  }
}
